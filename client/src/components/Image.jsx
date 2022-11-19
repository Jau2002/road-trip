function Image({ img, alt, preloader }) {
	return (
		<img
			src={`/public/${img}`}
			alt={alt}
			className={preloader ? 'u-preloader' : 'u-bg-home'}
		/>
	);
}

export default Image;
