import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core'
import { ShareableItem } from 'src/app/shared/models/shareable-item'

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ChildComponent implements OnInit {
    @Input() public items!: ShareableItem[]

    constructor() {}

    public ngOnInit(): void {}
}
