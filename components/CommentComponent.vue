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