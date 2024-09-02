import { useEffect } from 'react';

export function useGetImageURL(
  images: (Blob | string)[],
  setUrls: React.Dispatch<React.SetStateAction<string[]>>
) {
  useEffect(() => {
    if (images.length) {
      for (let i = 0; i < images.length; i++) {
        if (!(images[i] instanceof File)) {
          continue;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
          setUrls((urls) => {
            const newUrls = [...urls];

            newUrls[i] = fileReader.result as string;

            return newUrls;
          });
        };

        fileReader.readAsDataURL(images[i] as Blob);
      }
    }

    return;
  }, [images]);
}
