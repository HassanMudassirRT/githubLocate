import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStats } from './user-stats';
import { UserStat } from '../../interfaces';

describe('UserStats', () => {
  let component: UserStats;
  let fixture: ComponentFixture<UserStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStats);
    component = fixture.componentInstance;
    const stats: UserStat[] = [{label: '', value: 0}];
    fixture.componentRef.setInput('stats', stats);
    fixture.detectChanges();
  });

  it('should create UserStats', () => {
    expect(component).toBeTruthy();
  });
});
