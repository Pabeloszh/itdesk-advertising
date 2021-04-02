<template>
    <div class="bpost-title" v-if="post !== null" :style="{'background-image': 'url(' + post.mainPhoto + ')'}">
        <h1>{{post.title}}</h1>
    </div>
    <div class="bpost-container" v-if="post !== null">
        <div class="post">
            <RichTextRenderer :document='post.blogPost'/>
            <div class="bpost-nav">
                <p @click="prev">POPRZEDNI WPIS</p>
                <p @click="next">NASTĘPNY WPIS</p>
            </div>
        </div>
        <div class="post-list">
            <h2>Zobacz też:</h2>
            <div class="post-thumbnail" v-for="(thumb, index) in thumbnails" :key="index" @click="$router.push({ name: 'BlogPost', params: { post: thumb.fields.url } })">
                <img :src="thumb.fields.mainPhoto" alt="">
                <div>
                    <h4>{{thumb.fields.title}}</h4>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import  {mapState, mapMutations} from "vuex"
export default {
    name:"BlogPost",
    components:{
        RichTextRenderer
    },
    data(){
        return{
            post: null,
            thumbnails: [],
        }
    },
    computed:{
        ...mapState(['blogPosts', 'postsLoaded'])
    },
    created() {
      this.$store.dispatch('loadPost');
    },
    methods:{
        ...mapMutations(['blogPosts', 'postsLoaded']),
        prev(){
            console.log(this.$route.params.post, this.thumbnails[0].fields.url)
        },
        next(){
            console.log('next')
        },
        renderMarks() {
            return {
                [MARKS.BOLD]: (text, key) => ('custom-bold', { key: key }, text)
            };
        },
        renderNodes() {
            return {
                [BLOCKS.PARAGRAPH]: (node, key, next) => ('custom-paragraph', { key: key }, next(node.content, key, next))
            }
        }
    },
    watch:{
        postsLoaded: {
            handler: function(){
                if(this.postsLoaded) {
                    this.blogPosts.data.items.filter((obj)=>{if(obj.fields.url === this.$route.params.post) this.post = obj.fields});
                    this.blogPosts.data.items.filter((obj)=>{if(obj.fields.url !== this.$route.params.post) this.thumbnails.push(obj)});
                }
            },
            immediate: true
            
        },
    }
}
</script>

<style lang="scss" src="./BlogPost.style.scss">

</style>