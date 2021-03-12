import { TestBed } from '@angular/core/testing';
import { TodoDataService } from './todo-data.service';
describe('TodoDataService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(TodoDataService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=todo-data.service.spec.js.map