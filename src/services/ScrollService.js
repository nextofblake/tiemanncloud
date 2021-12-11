import { timer,BehaviorSubject } from "rxjs";
import { tap, map, filter } from "rxjs/operators";
import $ from "jquery";
export class ScrollService
{
    elementCallback = null
    subject = null
    animateCommand = null

    constructor(elementCallback)
    {
        this.elementCallback = elementCallback
        this.subject = new BehaviorSubject(0)
        this.animateCommand = new BehaviorSubject({
            moveTo: 0,
            status: 'done',
        })

        timer(0, 100)
            .pipe(
                // query objects
                map(() => Object.create({
                    element: this.elementCallback(),
                    subject: this.subject,
                    animateCommand: this.animateCommand
                })),
                // query filter
                filter(({element, subject}) =>
                    element !== undefined
                    && subject !== null
                ),
                // update scroll position
                tap(this.updateScroll),
                // animate scroll position
                tap(this.animateScroll),
                // allow user to scroll
                tap(this.freeScroll)
            ).subscribe()
    }

    /**
     * Public
     */
    moveTo(value)
    {
        this.animateCommand = new BehaviorSubject({
            moveTo: value,
            status: 'queued',
        })
    }

    /**
     * Private
     */
    updateScroll({element, subject})
    {
        if(Math.abs(element.scrollTop - subject.getValue())) {
            subject.next(element.scrollTop)
        }
    }

    animateScroll({element, animateCommand})
    {
        // animate running command
        if (animateCommand.getValue().status === 'queued') {
            $(element).animate({
                scrollTop: animateCommand.getValue().moveTo
            }, 1000)
            animateCommand.next({
                moveTo: 0,
                status: 'done'
            })
        }
    }

    freeScroll()
    {
        this.animateTo = null
    }

    // Deprecated
    // onScroll = null
    // onScrollUp = null
    // onScrollDown = null

    // constructor(scrollableElement) {
    //     this.onScroll = fromEvent(scrollableElement, "scroll")
    //     .pipe(
    //         map(() => scrollableElement.scrollTop)
    //     );
    //     scrollableElement.addEventListener('gesturechange', function() {
    //         console.log('gesturechange')
    //         console.clear()
    //     });


    //     this.onScrollUp = this.onScroll.pipe(
    //         pairwise(),
    //         map(([prev, next]) => prev - next),
    //         filter(diff => diff < 0)
    //     )

    //     this.onScrollDown = this.onScroll.pipe(
    //         pairwise(),
    //         map(([prev, next]) => prev - next),
    //         filter(diff => diff > 0)
    //     )
    // }
}