import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fizz-buzz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fizz-buzz');
  });
  

  
  /* 1 */
  it(`should have output '1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	button.triggerEventHandler('click', null);
    expect(app.output).toEqual('1');
  });
  /* 2 */
  it(`should have output '2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 2; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('2');
  });  
  /* 3 */
  it(`should have output 'Fizz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 3; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('Fizz');
  });
  /* 4 */
  it(`should have output '4'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 4; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('4');
  });
  /* 5 */
  it(`should have output 'Buzz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 5; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('Buzz');
  });
  /* 6 */
  it(`should have output 'Fizz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 6; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('Fizz');
  });
  /* 7 */
  it(`should have output '7'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 7; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('7');
  });
  /* 8 */
  it(`should have output '8'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 8; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('8');
  });  
  /* 9 */
  it(`should have output 'Fizz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 9; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('Fizz');
  });
  /* 10 */
  it(`should have output 'Buzz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 10; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('Buzz');
  });
  /* 11 */
  it(`should have output '11'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 11; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('11');
  });
  /* 12 */
  it(`should have output 'Fizz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 12; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('Fizz');
  }); 
  /* 13 */
  it(`should have output '13'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
	const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 13; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('13');
  });  
  /* 14 */
  it(`should have output '14'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 14; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('14');
  });    
  /* 15 */
  it(`should have output 'FizzBuzz!'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 15; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('FizzBuzz!');
  });  
  /* 16 */
  it(`should have output '16'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 16; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('16');
  });    
  /* 17 */
  it(`should have output '17'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 17; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('17');
  }); 
  /* 18 */
  it(`should have output 'Fizz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 18; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('Fizz');
  }); 
  /* 19 */
  it(`should have output '19'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 19; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('19');
  }); 
  /* 20 */
  it(`should have output 'Buzz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 20; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('Buzz');
  });  
  /* 21 (should loop back to 1) */
  it(`should have output '1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
	fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
	for(var i = 0; i < 21; i++) {
	button.triggerEventHandler('click', null);
	}
    expect(app.output).toEqual('1');
  });   
  /*it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('app-test app is running!');
  });*/
});
