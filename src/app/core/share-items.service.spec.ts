import { TestBed } from '@angular/core/testing'

import { ShareItemsService } from './share-items.service'

describe('ShareItemsService', () => {
    let service: ShareItemsService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(ShareItemsService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })
})
