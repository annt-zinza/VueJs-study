<template>
  <div class="d2-game-content">
    <h1>{{ msg }}</h1>
    <div class="play-area">
      <div class="balls">
        <div class="ball-area" v-for="ballArea in listItem" :key="ballArea.bNumber">
          <div
              class="ball"
              @click="[playStatus ? breakBall(ballArea) : '']"
              :class="[ballArea.status === 1 ? 'has-selected' : 'not-selected']">
            <span>{{ ballArea.bNumber }}</span>
          </div>
        </div>
      </div>
      <div class="result">
        <p class="result-status">{{ resultStatus }}</p>
        <p class="score">Số điểm: {{ ballBreaks }}</p>
        <p class="currentTime">Thời gian: {{ currentTime }}</p>
        <button class="btn-start" @click="startGame">Bắt đầu</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "D2GameContent",
  props: {
    msg: String
  },
  data() {
    return {
      ballAreas: [],
      ballBreaks: 0,
      currentTime: 10,
      resultStatus: null,
      interval: null,
      playStatus: 0
    }
  },
  computed: {
    listItem() {
      for (let i = 0; i < 20; i++) {
        this.ballAreas.push({
          bNumber: i + 1,
          status: 0
        });
      }
      return this.ballAreas;
    }
  },
  methods: {
    breakBall(ballArea) {
      if (ballArea.status === 0) {
        ballArea.status = 1;
        this.ballBreaks += 1;
      }
    },
    startInterval() {
      this.interval = setInterval(() => {
        this.currentTime -= 1;
        if (this.currentTime <= 0) {
          clearInterval(this.interval);
          this.playStatus = 0;
          this.resultStatus = this.ballBreaks === 20 ? 'win' : 'lost';
        }
      }, 1000);
    },
    startGame() {
      this.ballBreaks = 0;
      this.ballAreas = [];
      this.currentTime = 10;
      this.resultStatus = null;
      this.playStatus = 1;
      clearInterval(this.interval);
      this.startInterval();
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
}

</script>

<style scoped lang="scss">
.d2-game-content {
  border: indianred solid 2px;
  background-color: goldenrod;

  .play-area {
    height: 600px;
    background-color: lightblue;
    border-top: indianred solid 2px;
    display: flex;
    align-items: center;

    .balls {
      width: 75%;
      height: 100%;
      background-color: lightslategray;
      display: flex;
      flex-wrap: wrap;
      align-content: start;
    }

    .result {
      width: 25%;
    }
  }
}

.ball-area {
  width: 9.85%;
  aspect-ratio: auto 1 / 1;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .ball {
    width: 100px;
    height: 100px;
    border: yellow solid 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    span {
      font-size: 30px;
      color: greenyellow;
    }
  }

  .has-selected {
    background-color: cadetblue;
  }

  .not-selected {
    background-color: saddlebrown;
  }
}

.result {
  .score {
    margin: 0;
    font-size: 50px;
    color: orangered;
  }

  .btn-start {
    background-color: greenyellow;
    padding: 10px 50px;
    outline: none;
    border: lightslategray solid 1px;
    border-radius: 50px;
    cursor: pointer;
    font-size: 20px;
    color: #bf2a2a;
    margin-top: 50px;

    &:hover {
      background-color: #42b983;
      color: #fff;
    }
  }

  .result-status {
    font-size: 45px;
    color: darkblue;
  }
}
</style>
