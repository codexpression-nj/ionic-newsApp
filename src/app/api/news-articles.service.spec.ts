import { TestBed } from '@angular/core/testing';

import { NewsArticlesService } from './news-articles.service';

describe('NewsArticlesService', () => {
  let service: NewsArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
