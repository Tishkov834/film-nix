import * as yup from 'yup';

export const createFilmSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  imageUrl: yup.string().required('Image url is required'),
  trailerUrl: yup.string().matches(
    /^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/,
    'Url is not available, please using youtube url',
  ).required('Trailer url is required'),
  year: yup.number().typeError('Must be a number').required('Year is required'),
  genre: yup.string().required('Genre is required'),
  director: yup.string().required('Director is required'),
  producer: yup.string(),
  distributor: yup.string(),
  story: yup.string().required('Story is required'),
  cast: yup.array().of(yup.string().required('Actor is required')),
});
