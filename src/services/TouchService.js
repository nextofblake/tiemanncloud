import { timer,BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";

export class TouchService {
    scrollSubject = new BehaviorSubject(0)
    onMove = null

    constructor(touchableElement) {
        this.onMove = timer(0, 100)
            .pipe(tap(() => {
                if(Math.abs(touchableElement.scrollTop - this.scrollSubject.getValue())) {
                    this.scrollSubject.next(touchableElement.scrollTop)
                }
            }))
        this.onMove.subscribe()
    }
}