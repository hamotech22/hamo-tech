const projectImageAssets = import.meta.glob("../assets/images/projects/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}", {
  eager: true,
  import: "default",
  query: "?url",
});

const projectImagesPath = "/src/assets/images/projects/";

const galleryImageAssets = import.meta.glob("../assets/images/gallery/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}", {
  eager: true,
  import: "default",
  query: "?url",
});

const galleryImagesPath = "/src/assets/images/gallery/";

const blogImageAssets = import.meta.glob("../assets/images/blogs/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}", {
  eager: true,
  import: "default",
  query: "?url",
});

const blogImagesPath = "/src/assets/images/blogs/";

export function resolveProjectImage(imagePath) {
  if (!imagePath.startsWith(projectImagesPath)) return imagePath;
  const assetPath = `../assets/images/projects/${imagePath.slice(projectImagesPath.length)}`;
  const bundledImage = projectImageAssets[assetPath];

  if (!bundledImage) {
    throw new Error(`Project image asset was not bundled: "${imagePath}".`);
  }

  return bundledImage;
}

export function resolveGalleryImage(imagePath) {
  if (!imagePath.startsWith(galleryImagesPath)) return imagePath;
  const assetPath = `../assets/images/gallery/${imagePath.slice(galleryImagesPath.length)}`;
  const bundledImage = galleryImageAssets[assetPath];

  if (!bundledImage) {
    throw new Error(`Gallery image asset was not bundled: "${imagePath}".`);
  }

  return bundledImage;
}

export function resolveBlogImage(imagePath) {
  if (!imagePath.startsWith(blogImagesPath)) return imagePath;
  const assetPath = `../assets/images/blogs/${imagePath.slice(blogImagesPath.length)}`;
  const bundledImage = blogImageAssets[assetPath];

  if (!bundledImage) {
    throw new Error(`Blog image asset was not bundled: "${imagePath}".`);
  }

  return bundledImage;
}
