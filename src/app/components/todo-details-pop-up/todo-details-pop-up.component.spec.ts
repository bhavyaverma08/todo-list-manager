import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailsPopUpComponent } from './todo-details-pop-up.component';

describe('TodoDetailsPopUpComponent', () => {
  let component: TodoDetailsPopUpComponent;
  let fixture: ComponentFixture<TodoDetailsPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoDetailsPopUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoDetailsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
