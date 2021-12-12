import { Component, OnDestroy, OnInit } from '@angular/core'
import { ShareItemsService } from './core/share-items.service'
import { ShareableItem } from './shared/models/shareable-item'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public title!: string
    public items!: ShareableItem[]

    constructor(private _shareItemsService: ShareItemsService) {}

    public ngOnInit(): void {
        this.initSubscribeInstance()
    }

    private initSubscribeInstance(): void {
        this._shareItemsService.getData().subscribe((data) => {
            this.items = data
        })
    }
}
