export default function load({ page: { params } }) {
	return {
		status: 301,
		redirect: `/blog/${params.category}`
	};
}
