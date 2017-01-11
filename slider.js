Vue.component('slider',{
	template:`
		<section class="vue-slider">
			<div class="viewport grid" :style="{width:num*100+'%',marginLeft:marginLeft}">
				<slot></slot>
			</div>
			<nav class="controls">
				<i class="fa fa-arrow-left" @click="prev_slide"></i>
				<i class="fa fa-arrow-right" @click="next_slide"></i>
			</nav>
		</section>
	`,
	data(){
		return {
			activeIndex:0,
			num:2
		};
	},
	computed:{
		marginLeft(){
			return -100*this.activeIndex+'%';
		}
	},
	mounted(){
		this.num=this.$children.length;
	},
	methods:{
		next_slide:function(){
			this.activeIndex=(this.activeIndex==this.num-1)?0:this.activeIndex+1;
		},
		prev_slide:function(){
			this.activeIndex=(this.activeIndex==0)?this.num-1:this.activeIndex-1;
		}
	}
});

Vue.component('slide',{
	props:{
		active:{default:false}
	},
	template:`
		<div class="slide" :class="{'active':false}">
			<slot></slot>
		</div>
	`
});

var app=new Vue({
	el:'#root',
	data:{
	}
});