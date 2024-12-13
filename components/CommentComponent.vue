<template>
	<div v-if="reviews" class="reviews">
		<a class="reviews_review" v-for="(review) in reviews.Reviews" :key="review.GoogleMapsUri"
			:href="review.GoogleMapsUri">
			<div>
				<span class="reviews_review_content">
					<span class="reviews_review_content_header">
						<a :href="review.AuthorAttribution.Uri">
							<img class="reviews_review_content_header_image" :src="review.AuthorAttribution.PhotoUri"
								alt="userImage" lazy />
						</a>
						<span class="reviews_review_content_header_rating">
							<StarIcon v-for="(_, i) in review.Rating" :key="i" />
						</span>
					</span>
					<p>{{ review.OriginalText?.Text }}</p>
				</span>
				<span class="reviews_review_content_footer">
					<a :href="review.AuthorAttribution.Uri">
						<p>{{ review.AuthorAttribution?.DisplayName }}</p>
					</a>
					<p class="reviews_review_time">{{ review.RelativePublishTimeDescription }}</p>
				</span>
			</div>
		</a>
		<a class="reviews_review"
			href="https://www.google.com/search?sa=X&sca_esv=d7e7d90bd6b3a957&hl=en&authuser=0&tbm=lcl&sxsrf=ADLYWILu7dQrFkJQe-s1xJ1tkCTQY6FGuQ:1733935207026&q=Menzel+Fahrzeugtechnik+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MzM1NzY3NDIyMje1MLc0NDM03sDI-IpRzjc1ryo1R8EtMaOoKrU0vSQ1OSMvM1shKLUsM7W8eBErAQUASHqSVFwAAAA&rldimm=6657371222758791613&ved=2ahUKEwjA4s-AlKCKAxVCRvEDHew0Lu8Q9fQKegQIQBAF&biw=1119&bih=785&dpr=1#lkt=LocalPoiReviews">
			<p>Alle bewertungen</p>
		</a>
	</div>
</template>

<script>
import apiService from "../helper/apiService";

export default {
	data() {
		return {
			reviews: null
		}
	},
	async mounted() {
		this.reviews = await apiService.getReviews();
	},
}
</script>

<style lang="scss">
.reviews {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	height: min-content;
	gap: $gap;
	padding: $gap;
	max-width: 100%;
	overflow-x: auto;

	&_review {
		height: calc(100%);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: $gap;
		min-width: 350px;
		border-radius: $border-radius;
		text-decoration: none;
		@include theme_based_background;
		@include theme_based_morphism_shadow;



		&_content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 100%;

			&_header {
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				&_rating {
					display: flex;
					width: 100%;
					max-width: 100px;
					justify-content: flex-end;

					svg {
						margin: auto 0;
						height: 20px;
					}
				}

				&_image {
					max-height: 75px;
				}
			}

			&_footer {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				font-size: 0.75rem;
			}
		}
	}
}
</style>