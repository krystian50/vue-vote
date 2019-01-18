<template>
  <div class="checkmark">
    <svg
      id="Layer_1"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 161.2 161.2"
      enable-background="new 0 0 161.2 161.2"
      xml:space="preserve"
    >
      <circle
        class="path"
        fill="none"
        stroke="#4caf50"
        stroke-width="4"
        stroke-miterlimit="10"
        cx="80.6"
        cy="80.6"
        r="62.1"
      />
      <polyline
        class="path"
        fill="none"
        stroke="#4caf50"
        stroke-width="6"
        stroke-linecap="round"
        stroke-miterlimit="10"
        points="113,52.8 74.1,108.4 48.2,86.4 "
      />

      <circle
        class="spin"
        fill="none"
        stroke="#4caf50"
        stroke-width="4"
        stroke-miterlimit="10"
        stroke-dasharray="12.2175,12.2175"
        cx="80.6"
        cy="80.6"
        r="73.9"
      />
    </svg>

    <p>Thank you!</p>
  </div>
</template>

<style lang="scss" scoped>
.checkmark {
  width: 200px;
  margin: 0 auto;
  padding-top: 40px;
}

svg {
  width: 110px;
}

.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out;
}

.spin {
  animation: spin 1s;
  transform-origin: 50% 50%;
}

p {
  font-family: sans-serif;
  color: #4caf50;
  font-size: 30px;
  font-weight: bold;
  margin: 20px auto;
  text-align: center;
  animation: text 0.25s linear 0.2s;
}

@keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes text {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
