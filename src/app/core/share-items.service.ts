import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { ShareableItem } from '../shared/models/shareable-item'

@Injectable({
    providedIn: 'root',
})
export class ShareItemsService {
    private _items: BehaviorSubject<ShareableItem[]>

    constructor() {
        this._items = new BehaviorSubject<ShareableItem[]>(this.setInstante())
    }

    private setInstante(): ShareableItem[] {
        return new Array<ShareableItem>()
    }

    public setData(data: ShareableItem[]): void {
        this._items.next(data)
    }

    public getData(): Observable<ShareableItem[]> {
        return this._items.asObservable()
    }
}
