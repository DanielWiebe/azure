const user = {
    name: 'Snip',
    imageUrl: 'https://photos.app.goo.gl/Sq2mNkD1HSgnezds8',
    imageSize: 512,
  };
  
  export default function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
  