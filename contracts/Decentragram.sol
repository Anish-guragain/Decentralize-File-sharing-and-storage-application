// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

contract Decentragram {
    string public name = "Decentragram ";

    // store Images and files
    
    uint256 public imageCount = 0;
    mapping(uint256 => Image) public images;

    uint256 public fileCount=0;
    mapping(uint256 => File) public files;


    uint256 public postCount = 0;
    mapping(uint256 => Post) public posts;



    //values stored in "Images" like defining tables and its columns



    // code for storing images
    struct Post{
        uint postId;
        string posthash;
        uint postSize;
        string postName;
        string postType;
        string postDescription;
        uint postuploadTime;
        address payable postuploader;
    }

    event PostUploaded(uint postId, string posthash, uint postSize, string postName, string postType, string postDescription, uint postuploadTime, address payable postuploader);

    function uploadPost(
        string memory _posthash,
        uint _postSize,
        string memory _postName,
        string memory _postType,
        string memory _postDescription
    ) public {
       // file hash exists
        require(bytes(_posthash).length > 0);

        // file size is greater than 0
        require(_postSize > 0);

        // file name is not empty
        require(bytes(_postName).length > 0);

        // file type is not empty
        require(bytes(_postType).length > 0);

        // file description is not empty
        require(bytes(_postDescription).length > 0);

        // uploader is not empty
        require(payable(msg.sender)!= address(0));


        postCount++;
        posts[postCount] = Post(postCount, _posthash, _postSize, _postName, _postType, _postDescription, block.timestamp, payable(msg.sender));

        emit PostUploaded(postCount, _posthash, _postSize, _postName, _postType, _postDescription, block.timestamp, payable(msg.sender));

      
    }

    // code for file upload
    struct File{
        uint fileId;
        string filehash;
        uint fileSize;
        string fileName;
        string fileType;
        string fileDescription;
        uint uploadTime;
        address payable uploader;

    }

    event FileUploaded(uint fileId, string filehash, uint fileSize, string fileName, string fileType, string fileDescription, uint uploadTime, address payable uploader);

    
    function uploadFile(
        string memory _filehash,
        uint _fileSize,
        string memory _fileName,
        string memory _fileType,
        string memory _fileDescription
        

    ) public payable {
        // file hash exists
        require(bytes(_filehash).length > 0);

        // file size is greater than 0
        require(_fileSize > 0);

        // file name is not empty
        require(bytes(_fileName).length > 0);

        // file type is not empty
        require(bytes(_fileType).length > 0);

        // file description is not empty
        require(bytes(_fileDescription).length > 0);

        // uploader is not empty
        require(payable(msg.sender)!= address(0));


        fileCount++;
        files[fileCount] = File(fileCount, _filehash, _fileSize, _fileName, _fileType, _fileDescription, block.timestamp, payable(msg.sender));

        emit FileUploaded(fileCount, _filehash, _fileSize, _fileName, _fileType, _fileDescription, block.timestamp, payable(msg.sender));

    }


    // code for image upload

    struct Image {
        uint256 id;
        string hash;
        string description;
        uint256 tipAmount;
        address payable author;


    }

    event ImageCreate(
        uint256 id,
        string hash,
        string description,
       
        uint256 tipAmount,
        address payable author

    );

    event ImageTipped(
        uint256 id,
        string hash,
        string description,
        uint256 tipAmount,
        address payable author

    );



    // create Images
    function uploadImage(
        string memory _imgHash,
        string memory _description
                
    ) public payable {
        // Image description exist while uploading
        require(bytes(_description).length > 0);

        // Image hash exist while uploading
        require(bytes(_imgHash).length > 0);

        // uploader address exist
        require(payable(msg.sender) != address(0x0));

        // incremnet image id
        imageCount++;

        // Add image to contract
        images[imageCount] = Image(
            imageCount,
            _imgHash,
            _description,
            0,
            payable(msg.sender)
        );

        // Trigger an event
        emit ImageCreate(
            imageCount,
            _imgHash,
            _description,
          
            0,
            payable(msg.sender)
        );
    }

    // Tip Images

    function tipImageOwner(uint256 _id) public payable {
        // Image id exist
        require(_id > 0 && _id <= imageCount);
        // Fetch the image
        Image memory _image = images[_id];
        // Fetch the author of the image
        address payable _author = _image.author;
        // pay the auther by sending ether
        payable(_author).transfer(msg.value);
        // increment the tip amount
        _image.tipAmount = _image.tipAmount = msg.value;
        // update the image
        images[_id] = _image;
        // Trigger an event
        emit ImageTipped(
            _id,
            _image.hash,
            _image.description,
            _image.tipAmount,
            _image.author
        );
    }




    
    // function comment(uint256 _id, string memory _comment2) public payable {
      
    //     require(payable(msg.sender) != address(0x0));

    //     Image memory _image = images[_id];

    //     _image.comment=_image.comment=  _comment2;


    //    images[_id] = _image;
    //     // Trigger an event
    //     emit ImageTipped(
    //         _id,
    //         _image.hash,
    //         _image.description,
    //         _image.comment,
    //         _image.tipAmount,
    //         _image.author
    //     );
    // }

}
