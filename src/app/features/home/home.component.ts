import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { ShareItemsService } from 'src/app/core/share-items.service'
import { ShareableItem } from 'src/app/shared/models/shareable-item'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
    public items: ShareableItem[]

    constructor(private _shareItemsService: ShareItemsService) {
        this.items = new Array<ShareableItem>()
    }

    public ngOnInit(): void {
        this.addNewItem()
    }

    public addNewItem(): void {
        this.items.push(new ShareableItem())
    }

    public setShareableData(): void {
        this._shareItemsService.setData(this.items)
    }
}
