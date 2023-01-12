<template>
  <div class="encryption_times">
    <div
      class="encryption_times_item"
      v-for="item in state.encryptionList"
      :key="item.value"
    >
      <div class="encryption_times_item_header">
        <div class="encryption_times_item_title zh_font_bold">
          {{ item.title }}
        </div>
        <div class="encryption_times_item_info en_font">
          {{ infoTo(item.info) }}
        </div>
      </div>
      <div class="encryption_times_item_content">
        <div class="encryption_times_item_content_value"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive } from "vue";
import { randomWord } from "@/utils/index";
const infoTo = (value) => {
  return value.toUpperCase();
};
const state = reactive({
  encryptionList: [
    {
      title: "同态加密",
      info: "9xe227096gm7aj94ff6o6v8gmnbyy2",
      value: 50,
    },
    {
      title: "密文计算",
      info: "md9dqzoftrziuanoj94ff6nbyy2y9",
      value: 50,
    },
    {
      title: "密文查询",
      info: "7ohunh3rkduc6x5j94ff6o0",
      value: 50,
    },
    {
      title: "隐私求交",
      info: "toyjsqajkahoga4gcxluvdz6x5j94ff",
      value: 50,
    },
  ],
});
onMounted(() => {
  setInterval(() => {
    state.encryptionList.forEach((item) => {
      item.info = randomWord(true, 23, 30);
    });
  }, 5000);
});
</script>

<style lang="scss" scoped>
.encryption_times {
  height: 100px;
  width: 214px;
  .encryption_times_item {
    position: relative;
    margin-bottom: 4px;
    height: 21px;
    width: 100%;
    &:nth-child(2) {
      .encryption_times_item_content {
        .encryption_times_item_content_value {
          animation: width-change2 10s linear infinite alternate;
        }
      }
    }
    &:nth-child(3) {
      .encryption_times_item_content {
        .encryption_times_item_content_value {
          animation: width-change3 10s linear infinite alternate;
        }
      }
    }
    &:nth-child(1) {
      .encryption_times_item_content {
        .encryption_times_item_content_value {
          animation: width-change 6s linear infinite alternate;
        }
      }
    }
    &:nth-child(4) {
      .encryption_times_item_content {
        .encryption_times_item_content_value {
          animation: width-change4 10s linear infinite alternate;
        }
      }
    }

    .encryption_times_item_header {
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: -5px;
      left: -106px;
      align-items: center;
      height: 20px;
      width: 428px;
      transform: scale(0.5);
      .encryption_times_item_title {
        font-size: 14px;
        color: #ffffff;
        text-align: center;
      }
      .encryption_times_item_info {
        animation: change 5s infinite;
        opacity: 0.8;
        font-size: 14px;
        color: #ffffff;
        text-align: right;
        font-weight: 500;
      }
    }
    .encryption_times_item_content {
      position: absolute;
      top: 12px;
      height: 9px;
      width: 214px;
      background: url(../../../../../../../../assets/images/jdtbg.png) no-repeat
        0 0 / contain;
      background-size: 100% 100%;
      border: 1px solid rgba(27, 255, 243, 0.2);

      .encryption_times_item_content_value {
        position: absolute;
        top: 1px;
        left: 1.5px;
        height: 7px;
        width: 70px;
        background: url(../../../../../../../../assets/images/jdt.png) repeat 0
          0 / cover;
        background-size: 100% 100%;
      }
    }
  }
}
@keyframes width-change {
  0% {
    width: 60px;
  }
  100% {
    width: 60px;
  }
}
@keyframes width-change {
  0% {
    width: 60px;
  }
  25% {
    width: 120px;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 60px;
  }
}

@keyframes width-change2 {
  0% {
    width: 85px;
  }
  25% {
    width: 160px;
  }
  50% {
    width: 110px;
  }
  100% {
    width: 70px;
  }
}

@keyframes width-change3 {
  0% {
    width: 150px;
  }
  25% {
    width: 75px;
  }
  50% {
    width: 160px;
  }
  100% {
    width: 110px;
  }
}

@keyframes width-change4 {
  0% {
    width: 130px;
  }
  25% {
    width: 180px;
  }
  50% {
    width: 130px;
  }
  100% {
    width: 90px;
  }
}


@keyframes change {
    0%{
        // transform: translate3d(0, -100%, 0);
      opacity: 0;
    }
    10%,90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
        // transform: translate3d(0, 0, 0);
    }
 
}

</style>