<template>
      <mu-paper>
      <mu-bottom-nav shift class="mu-appbar-bottom">
        <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video"/>
        <mu-bottom-nav-item value="music" title="Music" icon="music_note"/>
        <mu-bottom-nav-item value="books" title="Books" icon="books"/>
        <mu-bottom-nav-item value="pictures" title="Pictures" icon="photo"/>
      </mu-bottom-nav>
    </mu-paper>
</template>

<script>
export default {
  name:'appBar'
}
</script>
