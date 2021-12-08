import { fromEvent } from "rxjs";
import { map, pairwise, filter } from "rxjs/operators";

export class ScrollService {
    onScroll = null
    onScrollUp = null
    onScrollDown = null

    constructor(scrollableElement) {
        this.onScroll = fromEvent(scrollableElement, "scroll")
        .pipe(
            map(() => scrollableElement.scrollTop)
        );
        scrollableElement.addEventListener('gesturechange', function() {
            console.log('gesturechange')
            console.clear()
        });


        this.onScrollUp = this.onScroll.pipe(
            pairwise(),
            map(([prev, next]) => prev - next),
            filter(diff => diff < 0)
        )

        this.onScrollDown = this.onScroll.pipe(
            pairwise(),
            map(([prev, next]) => prev - next),
            filter(diff => diff > 0)
        )
    }

    passive() {
        // console.log(event)
    }
}