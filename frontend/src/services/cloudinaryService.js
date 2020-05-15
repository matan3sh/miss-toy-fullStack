import axios from 'axios';

export default {
  upload,
};

async function upload(files) {
  const data = new FormData();
  data.append('file', files[0]);
  data.append('upload_preset', 't5vd3prm');
  const res = await axios.post(
    'https://api.cloudinary.com/v1_1/dwymjj6rm/image/upload',
    data
  );
  const file = await res.data;
  return file.secure_url;
}
