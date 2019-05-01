import React from 'react';
import ImageUploader from 'react-images-upload';

class AddImages extends React.Component {

	state = {
		image: null
	}

	handleChange(selectorFiles: FileList) {
      console.log(selectorFiles);
			let changedFile = selectorFiles[0].toString('base64');
			let idCardBase64 = '';
			this.getBase64(selectorFiles[0], (result) => {
		     idCardBase64 = result;
				 console.log(idCardBase64);
				 this.setImage(idCardBase64);
			 });
  }

	getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
	}

	setImage(image){
		this.props.setImage(image);
		this.setState({ image: image })
	}

    render() {
        return (
					<>
					{ this.state.image && <img src={this.state.image} class="rounded mx-auto d-block" alt="Car Image" /> }
					<label class="btn btn-outline-primary btn-xs mt-2 w-100" id="profilePictureUpload">
						Add Car Picture
						<i className="far fa-edit float-right m-1"></i>
						<input type="file" className="d-none" onChange={ (e) => this.handleChange(e.target.files) } />
					</label>
					</>
        );
    }
}
export default AddImages;
