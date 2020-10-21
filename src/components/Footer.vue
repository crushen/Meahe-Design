<template>
  <footer>
    <p>&copy;2020 Meahė Design Limited. All rights reserved.</p>
    <p>Website by <a href="https://charlotterushen.dev" target="_blank">Charlotte Rushen</a>.</p>
  </footer>
</template>

<style scoped>
footer {
  text-align: center;
  padding: 40px 0;
}

p {
  font-style: italic;
  font-size: 14px;
}

/* p:nth-child(2) {
  color: var(--light-grey);
}

a {
  color: var(--light-grey);
}

a:hover {
  color: var(--light-orange);
} */

/* Desktop */
@media screen and (min-width: 920px) {
  footer {
    margin-top: 200px;
    padding: 60px 0;
  }

  p:nth-child(2) {
    float: right;
    transform: translateY(-30px);
  }
}
</style>