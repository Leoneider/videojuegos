import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JuegoEditPage } from './juego-edit.page';

describe('JuegoEditPage', () => {
  let component: JuegoEditPage;
  let fixture: ComponentFixture<JuegoEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JuegoEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
