<template>
  <div :class="{ dark: switchCheckStatus }">
    <div class="overflow-hidden " :class="`${switchCheckStatus ? 'bg-gray-700' : 'bg-slate-200'}`">
      <div class="h-6 flex justify-around">
        <span @click="rl = !rl">
          <icon icon="codicon:three-bars" width="20" class="leading-3" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`"/>
        </span>
        <!-- 左弹窗开始 -->
        <van-popup v-model="rl" position="left" :style="{ height: '100%', width: '80%' }">
          <div class="w-screen bg-slate-200">
            <div class="w-[80%] py-3 px-3" :class="`${switchCheckStatus ? 'bg-gray-700' : 'bg-slate-200'}`">
              <div class="flex justify-between mb-3">
                <p class="flex" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
                  <img
                    class="w-[20px]"
                    src="https://th.bing.com/th/id/R.c2f3ba1647fcd6af7a08478f07048a46?rik=8if90cnoJcrf3w&riu=http%3a%2f%2fwebftp.bbs.hnol.net%2fdwcy%2f2020%2f5%2ff383029ac5833dbf5132d90064473d390d5c45fc153142-dejPyB.png&ehk=Lwe%2b%2bwzLTca8iHHDOiALpnOW4aLyfV1rEWy4LFPqMIw%3d&risl=&pid=ImgRaw&r=0"
                    alt=""
                  />
                  <span class="text-xs leading-6">武汉禁烟大使</span>
                  <Icon icon="ic:baseline-greater-than" width="24" />
                </p>
                <Icon
                  icon="teenyicons:scan-solid" width="24" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`"/>
              </div>
              <div class="mb-5">
                <div
                  class="text-xs bg-gradient-to-r from-[#2a2727] to-slate-600 rounded-2xl"
                >
                  <p class="flex justify-between py-3 px-2">
                    <span class="text-slate-200 text-sm">开通黑胶VIP</span>
                    <span
                      class="w-[55px] h-[20px] text-[#a18e8a] leading-4 border-2 rounded-lg border-solid border-[#a18e8a]"
                      >会员中心</span
                    >
                  </p>
                  <p
                    class="flex py-3 mb-2 border-b-2 border-solid border-[#a18e8a]"
                  >
                    <span class="leading-5 text-[#73696a]"
                      >立享超21项专属特权</span
                    >
                    <Icon
                      icon="ic:baseline-greater-than"
                      width="24"
                      class="text-[#73696a]"
                    />
                  </p>
                  <p class="flex justify-between px-2">
                    <span class="text-[#73696a] leading-8"
                      >专享优惠!黑胶VIP仅￥0.1/天!</span
                    >
                    <span
                      class="w-[30px] h-[30px] text-center bg-[#da4900] text-[#ffecec]"
                      >受邀专享</span
                    >
                  </p>
                </div>
              </div>
              <div class="py-3 px-3  rounded-xl" :class="`${switchCheckStatus ? 'bg-gray-900' : 'bg-[white]'}`">
                <div class="flex justify-between border-b-2 border-solid border-[#fefefe]">
                  <div class="flex" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
                    <span class="mr-3">
                      <Icon icon="tabler:message" width="24" color="" />
                    </span>
                    <span class="">消息中心</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div
                  class="flex justify-between border-b-2 border-solid border-[#fefefe]"
                >
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="mdi:love-seat-outline" width="24" color="" />
                    </span>
                    <span class="">云贝中心</span>
                  </div>
                  <div>
                    <span class="flex justify-between">
                      <span class="mr-3 text-[#959595] text-xs leading-6"
                        >签到</span
                      >
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="icon-park-outline:lamp" width="24" color="" />
                    </span>
                    <span class="">创作者中心</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="my-6 px-3  rounded-xl"
                :class="`${switchCheckStatus ? 'bg-gray-900' : 'bg-[white]'}`"
              >
                <div class="mb-4 border-b-2 border-solid border-[#fefefe]">
                  <span class="text-[#a3a3a3]">音乐服务</span>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="formkit:pinterest" width="24" />
                    </span>
                    <span>趣测</span>
                  </div>
                  <div class="flex">
                    <span class="mr-3 text-[#a3a3a3] text-xs leading-6">
                      点击查看今日运势
                    </span>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="material-symbols:holiday-village-outline-rounded"
                        width="24"
                      />
                    </span>
                    <span>云村月示</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="lucide:pocket-knife" width="24" />
                    </span>
                    <span>多多西西口袋</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="map:shopping-mall" width="24" />
                    </span>
                    <span>商城</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="iconoir:time-zone" width="24" />
                    </span>
                    <span>Beat专区</span>
                  </div>
                  <div>
                    <span class="flex justify-between">
                      <span class="mr-3 text-[#959595] text-xs leading-5"
                        >顶尖制作邀你创作</span
                      >
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="solar:dumbbell-small-line-duotone"
                        width="24"
                      />
                    </span>
                    <span>口袋彩铃</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="fluent-mdl2:game" width="24" />
                    </span>
                    <span>游戏专区</span>
                  </div>
                  <div class="flex">
                    <span class="mr-2 text-[#959595] text-xs leading-6">
                      音乐浇灌治愈花园
                    </span>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div
                class="my-6 px-3 rounded-xl"
                :class="`${switchCheckStatus ? 'bg-gray-900' : 'bg-[white]'}`"
              >
                <div class="mb-4 border-b-2 border-solid border-[#fefefe]">
                  <span class="text-[#a3a3a3]">其他</span>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="ic:baseline-phonelink-setup" width="24" />
                    </span>
                    <span>设置</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="gg:dark-mode" width="24" />
                    </span>
                    <span>深色模式</span>
                  </div>
                  <div>
                    <Drawer :value.sync="switchCheckStatus" />
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="quill:off" width="24" />
                    </span>
                    <span>定时关闭</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="streamline:shopping-catergories-shirt-clothing-t-shirt-men-top"
                        width="24"
                      />
                    </span>
                    <span>个性装扮</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="charm:music" width="24" />
                    </span>
                    <span>边听边存</span>
                  </div>
                  <div>
                    <span class="flex">
                      <span class="mr-3 text-[#959595] text-xs leading-5"
                        >未开启</span
                      >
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="material-symbols:book-online-outline-rounded"
                        width="24"
                      />
                    </span>
                    <span>在线听歌免流量</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="ic:twotone-switch-access-shortcut-add"
                        width="24"
                      />
                    </span>
                    <span>添加Siri捷径</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="arcticons:callsblacklist" width="24" />
                    </span>
                    <span>音乐黑名单</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="material-symbols:book-online-outline-rounded"
                        width="24"
                      />
                    </span>
                    <span>青少年模式</span>
                  </div>
                  <div class="flex">
                    <span class="mr-3 text-[#959595] text-xs leading-5">
                      未开启
                    </span>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="clarity:alarm-clock-line" width="24" />
                    </span>
                    <span>音乐闹钟</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div
                class="my-6 px-3 bg-slate-100 rounded-xl"
                :class="`${switchCheckStatus ? 'bg-gray-900' : 'bg-[white]'}`"
              >
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="ri:customer-service-2-fill" width="24" />
                    </span>
                    <span>我的客服</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="icon-park-twotone:transaction-order"
                        width="24"
                      />
                    </span>
                    <span>我的订单</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="ri:coupon-4-line" width="24" />
                    </span>
                    <span>优惠卷</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="carbon:music" width="24" />
                    </span>
                    <span>分享网易云音乐</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="material-symbols:inventory-rounded"
                        width="24"
                      />
                    </span>
                    <span>个人信息收集与使用清单</span>
                  </div>
                  <div>
                    <span class="">
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon
                        icon="fluent:book-information-24-regular"
                        width="24"
                      />
                    </span>
                    <span>个人信息第三方共享清单</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="ic:outline-privacy-tip" width="24" />
                    </span>
                    <span>个人信息与隐私保护</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
                <div class="mb-4 flex justify-between">
                  <div
                    class="flex"
                    :class="`${
                      switchCheckStatus ? 'text-[white]' : 'text-gray-900'
                    }`"
                  >
                    <span class="mr-3">
                      <Icon icon="mdi:about-circle-outline" width="24" />
                    </span>
                    <span>关于</span>
                  </div>
                  <div>
                    <span>
                      <Icon
                        icon="ic:baseline-greater-than"
                        width="24"
                        class="text-[#c9c9c9]"
                      />
                    </span>
                  </div>
                </div>
              </div>

              <p
                class="h-[50px] my-6 px-3 text-[red] rounded-lg text-center leading-[54px]"
                :class="`${switchCheckStatus ? 'bg-gray-600' : 'bg-slate-300'}`"
              >
                退出登录
              </p>
            </div>
          </div>
        </van-popup>
        <!-- 左弹窗结束 -->

        <!-- 下弹出框开始 -->
        <van-popup
          v-model="show"
          closeable
          close-icon="close"
          position="bottom"
          :style="{ height: '30%' }"
        >
          <div
            class="h-[100%]"
            :class="`${switchCheckStatus ? 'bg-gray-900' : 'bg-[white]'}`"
          >
            <p class="py-6 border-b-2 text-xs text-pink-500">张碧晨 为你推荐</p>
            <p
              class="my-4 flex"
              :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`"
            >
              <span>
                <Icon icon="ei:like" width="36" class="mr-1" />
              </span>
              <span class="leading-8">优先推荐</span>
            </p>
            <p
              class="my-4 flex"
              :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`"
            >
              <span>
                <Icon icon="iconoir:user-love" width="28" class="mr-2" />
              </span>
              <span class="leading-8">减少推荐</span>
            </p>
            <p
              class="my-4 flex"
              :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`"
            >
              <span>
                <Icon icon="clarity:refresh-line" width="24" class="mr-3"  />
              </span>
              <span>刷新</span>
            </p>
          </div>
        </van-popup>
        <!-- 下弹出框结束 -->
        <input
          type="text"
          :placeholder="fetchSearch.showKeyword"
          class="bg-gradient-to-r from-[#dddbfb] to-pink-500 w-80 rounded h-6 border border-solid text-xs"
        />
        <icon
          icon="mdi:microphone"
          width="20"
          class="leading-3" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`"
        />
      </div>
      <!-- banner -->
      <div class="swiper-container mt-3">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in menu" v-bind:key="item.id">
            <img :src="item.pic" alt="" />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <!-- <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div> -->
      </div>
      <div class="mt-3">
        <ul class="flex justify-around">
          <li>
            <icon
              icon="material-symbols:recommend"
              color="red"
              width="30"
              class="ml-3"
            />
          </li>
          <li>
            <icon
              icon="simple-icons:roamresearch"
              color="red"
              width="30"
              class="ml-8"
            />
          </li>
          <li>
            <icon
              icon="game-icons:love-song"
              color="red"
              width="30"
              class="ml-4"
            />
          </li>
          <li>
            <icon icon="icon-park-outline:viencharts" color="red" width="30" />
          </li>
          <li>
            <icon icon="arcticons:aaaaa" color="red" width="30" />
          </li>
        </ul>
      </div>
      <div>
        <ul class="flex justify-around">
          <li v-for="item in lists" :key="item.id">
            <span :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="flex justify-between" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
        <h2>推荐歌单</h2>
        <h2 @click="show = !show">
          <Icon icon="mingcute:more-2-line" width="24" />
        </h2>
      </div>
      <div>
        <div class="swiper-container1" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
          <div class="swiper-wrapper overflow-hidden">
            <div
              class="swiper-slide mr-6"
              style="border-radius: 10px; height: 200px"
            >
              <transition name="abc">
                <div v-if="visible" class="absolute top-0 left-0">
                  <img
                    alt=""
                    src="http://p1.music.126.net/6MPDyBrXtrDTRmEU_HkSoQ==/109951168689030052.jpg"
                    style="border-radius: 10px"
                  />
                  <p class="h-[48px] overflow-hidden">那些好听的日漫主题曲</p>
                  <p
                    class="absolute"
                    style="top: 10px; right: 10px;"
                  >
                    <Icon icon="ion:infinite" width="20" />
                  </p>
                </div>
              </transition>
              <transition name="abc">
                <div v-if="!visible" class="absolute top-0 left-0">
                  <img
                    alt=""
                    src="http://p2.music.126.net/pCk-zKisrYzpXpUcrK5G5w==/3399689964828104.jpg"
                    style="border-radius: 10px"
                  />
                  <p class="h-[48px] overflow-hidden">
                    评论数最多的动漫音乐TOP100（长期更新）
                  </p>
                  <p
                    class="absolute"
                    style="top: 10px; right: 10px;"
                  >
                    <Icon icon="ion:infinite" width="20" />
                  </p>
                </div>
              </transition>
            </div>

            <div
              class="swiper-slide mr-6"
              style="border-radius: 10px; height: 200px"
              v-for="item in lists2"
              v-bind:key="item.id"
            >
              <img :src="item.uiElement.image.imageUrl" alt="" style="border-radius: 12px" />
              <p class="text-xs">{{ item.uiElement.mainTitle.title }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between mt-3" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
        <div class="flex">
          <h2>新闻导播</h2>
          <Icon icon="ic:baseline-greater-than" width="24" />
        </div>
        <h2 @click="show = !show">
          <Icon icon="mingcute:more-2-line" width="24" />
        </h2>
      </div>

      <div>
        <div class="swiper-container2 " :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="item in lists2"
              v-bind:key="item.id"
            >
              <div class="flex justify-around mb-8 h-[70px]">
                <div>
                  <p class=" mb-3">
                    云村音乐 <span>{{ time }}</span>
                    <span class="bg-red-300 text-red-600">热门时报</span>
                  </p>
                  <span>我想和你牵了手就走到永远的永远</span>
                </div>
                <img
                  :src="item.uiElement.image.imageUrl"
                  alt=""
                  class="w-[80px] h-[60px] rounded-md"
                  style="border-radius: 12px"
                />
              </div>
              <div class="flex justify-around mb-8 h-[70px]">
                <div class=" mb-3">
                  <p>
                    乐队 <span>{{ time }}</span>
                    <span class="bg-red-300 text-red-600">花儿红乐队</span>
                  </p>
                  <span>我想和你牵了手就走到永远的永远</span>
                </div>
                <img
                  :src="item.uiElement.image.imageUrl"
                  alt=""
                  class="w-[80px] h-[60px] rounded-md"
                />
              </div>
              <div class="flex justify-around h-[70px]">
                <div class=" mb-3">
                  <p>
                    彩虹 <span>{{ time }}</span>
                    <span class="bg-red-300 text-red-600">热门歌曲</span>
                  </p>
                  <span>我想和你牵了手就走到永远的永远</span>
                </div>
                <img
                  :src="item.uiElement.image.imageUrl"
                  alt=""
                  class="w-[80px] h-[60px] rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between mt-3" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
        <div class="flex">
          <h2>排行榜</h2>
          <Icon icon="ic:baseline-greater-than" width="24" />
        </div>
        <h2 @click="show = !show">
          <Icon icon="mingcute:more-2-line" width="24" />
        </h2>
      </div>

      <div class="w[100vw]" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
        <div class="swiper-container3">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide my-3 mx-3"
              v-for="item in list4"
              v-bind:key="item.id"
            >
              <div class="flex mb-3">
                <img
                  :src="item.uiElement.image.imageUrl"
                  alt=""
                  class="w-[60px] h-[50px]" style="border-radius: 8px"
                />
                <span class="text-pink-300 mr-3">1</span>
                <span class="mr-3">{{ item.uiElement.labelText.title }}</span>
                <span class="mr-3">{{ item.uiElement.labelText.text }}</span>
              </div>

              <div class="flex mb-3">
                <img
                  :src="item.uiElement.image.imageUrl"
                  alt=""
                  class="w-[60px] h-[50px]" style="border-radius: 8px"
                />
                <span class="text-yellow-300 mr-3">1</span>
                <span class=" mr-3">{{ item.uiElement.mainTitle.title }}</span>
                <span class=" mr-3">{{ item.uiElement.labelText.text }}</span>
              </div>

              <div class="flex">
                <img
                  :src="item.uiElement.image.imageUrl"
                  alt=""
                  class="w-[60px] h-[50px]" style="border-radius: 8px"
                />
                <span class="text-red-600">1</span>
                <span class=" mr-3">{{ item.uiElement.mainTitle.title }}</span>
                <span class=" mr-3">{{ item.uiElement.labelText.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between mt-3" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
        <div class="flex">
          <h2>排行榜</h2>
          <Icon icon="ic:baseline-greater-than" width="24" />
        </div>
        <h2 @click="show = !show">
          <Icon icon="mingcute:more-2-line" width="24" />
        </h2>
      </div>

      <div class="">
        <div class="swiper-container4" :class="`${switchCheckStatus ? 'text-[white]' : 'text-gray-900'}`">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide flex px-3 py-3 border-solid rounded-md bg-pink-200"
              style="border-radius: 12px"
            >
              <div class="">
                <p class="text-xs">年少有为开奥迪</p>
                <span class="text-pink-200 text-xs">热度300万</span>
                <p class="text-sm">
                  啊是大多数啊大苏打倒萨阿萨大大十大啊实打实大苏打
                </p>
              </div>
              <img
                src="https://seopic.699pic.com/photo/50051/5435.jpg_wh1200.jpg"
                alt=""
                class="w-[100px]"
                style="border-radius: 12px"
              />
            </div>
            <div
              class="swiper-slide flex px-3 py-3 border-solid rounded-md bg-pink-200"
            >
              <div class="">
                <p class="text-xs">年少有为开奥迪</p>
                <span class="text-pink-200 text-xs">热度300万</span>
                <p class="text-sm">
                  啊是大多数啊大苏打倒萨阿萨大大十大啊实打实大苏打
                </p>
              </div>
              <img
                src="https://seopic.699pic.com/photo/50051/5435.jpg_wh1200.jpg"
                alt=""
                class="w-[100px]"
                style="border-radius: 12px"
              />
            </div>
            <div class="swiper-slide flex px-3 py-3 border-solid rounded-md bg-pink-200">
              <div class="">
                <p class="text-xs">年少有为开奥迪</p>
                <span class="text-pink-200 text-xs">热度300万</span>
                <p class="text-sm">
                  啊是大多数啊大苏打倒萨阿萨大大十大啊实打实大苏打
                </p>
              </div>
              <img
                src="https://seopic.699pic.com/photo/50051/5435.jpg_wh1200.jpg"
                alt=""
                class="w-[100px]"
                style="border-radius: 12px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { fetchSearchDefault, fetchSear } from '@/request/index.js';
import Swiper from 'swiper';
import '../../node_modules/swiper/css/swiper.css';
import BScroll from '@better-scroll/core';

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  mounted() {
    new BScroll(this.$refs / wrapper);
  },
  data() {
    return {
      list4:[],
      visible: true,
      ert: null,
      fetchSearch: {},
      switchCheckStatus: false,
      show: false,
      rl: false,
      time: [],
      num: 12,
      menu: [], //图片上一级
      //   activeMenuItem:'',
      menu1: {},
      menu2:[],
      menu3: [],
      lists: [
        {
          id: 1,
          name: '每日推荐',
        },
        {
          id: 2,
          name: '私人漫游',
        },
        {
          id: 3,
          name: '歌单',
        },
        {
          id: 4,
          name: '排行榜',
        },
        {
          id: 5,
          name: '音乐',
        },
      ],
      lists2: [],
    };
  },
  async created() {
    const res1 = await fetchSearchDefault();
    this.fetchSearch = res1.data.data;
    const res = await fetchSear().catch((err) => {
      console.log(err);
    });
    this.menu = res.data.data.blocks[0].extInfo.banners;
    this.lists2 = res.data.data.blocks[1].creatives;
    this.menu2 =res.data.data.blocks[3].creatives[5].resources[0].resourceExtInfo.artists;
    this.list4 = res.data.data.blocks[3].creatives[0].resources
  },
  mounted() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    this.time = `${currentMonth}/${currentDay}`;
    setInterval(() => {
      this.visible = !this.visible;
    }, 3000);
  },
  methods: {
    toggle() {
      this.$emit('update:value', !this.value);
    },
    getswiper() {
      new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        touchMoveStopPropagation: false,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      });
      new Swiper(`.swiper-container1`, {
        slidesPerView: 3,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      new Swiper(`.swiper-container2`, {
        // slidesPerView: 3,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      new Swiper(`.swiper-container3`, {
        spaceBetween: 30,
        touchMoveStopPropagation: false,
      });
      new Swiper(`.swiper-container4`, {
        freeMode: true,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    },
  },
  updated() {
    this.$nextTick(() => {
      this.getswiper();
    });
  },
};
</script>
<style>
.active {
  color: red;
}

.abc-enter {
  transform: translateY(100%) scale(0.7);
}

.abc-enter-active {
  transition: all ease-in-out 1s;
}

.abc-enter-to {
  transform: translateY(0) scale(1);
}

.abc-leave {
  transform: translateY(0) scale(1);
}

.abc-leave-active {
  transition: all ease-in-out 1s;
}

.abc-leave-to {
  transform: translateY(-100%) scale(0.7);
}
</style>
