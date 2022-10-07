<script setup>
const props = defineProps(["user"])
</script>
<template>
	<div class="profileInfos">
		<img class="profilePhoto" :src="`/src/assets/png/${props.user.photo}`" alt="profile_photo">
		<div>
			<p class="person">{{props.user.fullname}}</p>
			<p class="mail">{{props.user.email}}</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
.profileInfos {
	@apply flex gap-4 items-center ml-[54px];
	.profilePhoto {
		@apply w-10;
	}
	.person {
		@apply font-medium text-navy;
	}
	.mail {
		@apply text-xs font-normal text-gray-deep;
	}
}
</style>