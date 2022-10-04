import { Component, OnInit } from '@angular/core';
import { Observable, of, BehaviorSubject, switchMap, interval, Subscription, map, share } from 'rxjs';
import { timer } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {


  //Access-Control-Allow-Origin: https://earthwindandfire.lnk.to/listenYD

  audio = new Audio()
  musicPlaying: boolean = false

  musicList: string[] = ['../assets/DoYouLikeWaffles.mp3', '../assets/ChickenWing.mp3', '../assets/DuckSong.mp3', '../assets/CrazyFrog.mp3']

  timeLeft: number = 300
  initalTime = this.timeLeft
  minutesLeft = Math.floor(this.timeLeft / 60)
  availableTimes = [60, 300, 600, 900, 1200, 1800, 2400]
  booleanStart: boolean = false;
  musicPlayed: boolean = false;

  today = new Date();
  timeString: string = ''
  subscription?: Subscription;

  ngOnInit(): void {

    //main clock part
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.today = time;
      });
    //study timer 
    // this.subscription = interval(1000)
    // .subscribe(x => { this.getTimeDifference(); });


    interval(1000).subscribe(() => {
      this.clockInterval(), this.minutesLeft = Math.floor(this.timeLeft / 60)
        , this.timeString = this.getTime(this.today)
        , this.myStyle = {
          width: ((this.timeLeft / this.initalTime) * 100).toString() + '%'
        }
    })


  }

  ngOnDestroy(): void {
    console.log('has been destroyed')
  }

  // randomSong():string{
  // return this.musicList[3]
  // }

  playAudio() {
    this.audio.src = this.musicList[Math.floor(Math.random() * this.musicList.length)]
    this.audio.load()
    this.audio.play()
  }

  stopAudio() {
    this.audio.pause()
    this.musicPlaying = false
    this.musicPlayed = true
  }

  getTime(date: Date): string {
    return (date.getHours() % 12 + ':' + this.correctTime(date.getMinutes()) + ':' + this.correctTime(date.getSeconds()))
  }

  clockInterval() {
    if (this.timeLeft > 0) {
      if (this.booleanStart) {
        this.timeLeft--
      }
    }
      if (this.timeLeft <= 0) {
        if (this.musicPlaying == false) {
          if(this.musicPlayed == false){
          this.playAudio()
          }
          this.musicPlayed = true
          
        }
      }

    
  }

  startClock(bool: boolean) {
    if (bool) {
      this.booleanStart = true
    }
    else {
      this.booleanStart = false
    }
    this.musicPlayed = false
  }

  correctTime(num: number): string {
    if (num < 10) {
      return '0' + num
    }
    else {
      return num.toString()
    }
  }
  myStyle = {
    width: '0%'
  }

  setTime(i: number) {
    this.timeLeft = i;
    this.initalTime = i;
  }
}
