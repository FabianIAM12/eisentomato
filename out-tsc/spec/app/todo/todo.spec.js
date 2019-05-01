import { Todo } from './';
describe('Todo', function () {
    it('should create an instance', function () {
        expect(new Todo()).toBeTruthy();
    });
    it('should accept values in the constructor', function () {
        var todo = new Todo({
            title: 'hello',
            complete: true
        });
        expect(todo.title).toEqual('hello');
        expect(todo.complete).toEqual(true);
    });
});
//# sourceMappingURL=todo.spec.js.map