import {Component, OnInit} from '@angular/core';
import {from, interval, Observable, range, timer} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'test';

  ngOnInit(): void {
    // const int = interval(500)
    //   // зупинить інтервал на 10 числі,
    //   // take - говорить скільки нам треба отримати чисел з потоку
    //   .pipe(take(10))
    //   .subscribe(x => {
    //       console.log(x);
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //     () => console.log('Completed')
    //   );

    // при запуску 3 секунди нічого не буде, так як це затримка
    // другий параметр - інтервал
    // const tm = timer(3000, 500)
    //   .pipe(take(10))
    //   .subscribe(x => {
    //       console.log(x);
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //     () => console.log('Completed')
    //   );
    // range перший парамтер 5 - стартуємо з 5
    // 2 параметр 5 - скільки раз пройтись треба
    // const rng = range(5, 5)
    //   .subscribe(x => {
    //       console.log(x);
    //     },
    //     (error) => {
    //       console.log(error);
    //     },
    //     () => console.log('Completed')
    //   );
    // перебираємо масив через фром

    // const set = new Set([1, 2, 3, '4', '5', {id: 6}]);

    // const map = new Map([[1, 2], [3, 4]]);
    // const result = from(map)
    //   .subscribe(x => console.log(x));
  }
}
