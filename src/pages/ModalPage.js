import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet
        bibendum diam. Sed egestas nisi laoreet, fringilla tellus nec,
        consectetur nunc. Maecenas orci dolor, vehicula vitae elementum
        pulvinar, molestie in ante. Vestibulum vitae velit fringilla, rutrum
        lacus vitae, dignissim nulla. Mauris luctus nunc in tincidunt vulputate.
        Phasellus quis sapien pharetra, eleifend enim feugiat, ullamcorper
        sapien. Ut dictum, lacus quis venenatis viverra, odio sapien aliquet
        nibh, a pellentesque augue arcu venenatis quam. Maecenas faucibus lectus
        eu ligula iaculis tristique. Cras ligula ligula, tincidunt sed neque sit
        amet, placerat vestibulum nisi. Donec iaculis lacinia fermentum. Sed id
        varius mi. Donec et lacus maximus, semper dolor eu, tincidunt felis.
        Nulla facilisi. Quisque euismod facilisis turpis, auctor placerat tellus
        dictum non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet
        bibendum diam. Sed egestas nisi laoreet, fringilla tellus nec,
        consectetur nunc. Maecenas orci dolor, vehicula vitae elementum
        pulvinar, molestie in ante. Vestibulum vitae velit fringilla, rutrum
        lacus vitae, dignissim nulla. Mauris luctus nunc in tincidunt vulputate.
        Phasellus quis sapien pharetra, eleifend enim feugiat, ullamcorper
        sapien. Ut dictum, lacus quis venenatis viverra, odio sapien aliquet
        nibh, a pellentesque augue arcu venenatis quam. Maecenas faucibus lectus
        eu ligula iaculis tristique. Cras ligula ligula, tincidunt sed neque sit
        amet, placerat vestibulum nisi. Donec iaculis lacinia fermentum. Sed id
        varius mi. Donec et lacus maximus, semper dolor eu, tincidunt felis.
        Nulla facilisi. Quisque euismod facilisis turpis, auctor placerat tellus
        dictum non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet
        bibendum diam. Sed egestas nisi laoreet, fringilla tellus nec,
        consectetur nunc. Maecenas orci dolor, vehicula vitae elementum
        pulvinar, molestie in ante. Vestibulum vitae velit fringilla, rutrum
        lacus vitae, dignissim nulla. Mauris luctus nunc in tincidunt vulputate.
        Phasellus quis sapien pharetra, eleifend enim feugiat, ullamcorper
        sapien. Ut dictum, lacus quis venenatis viverra, odio sapien aliquet
        nibh, a pellentesque augue arcu venenatis quam. Maecenas faucibus lectus
        eu ligula iaculis tristique. Cras ligula ligula, tincidunt sed neque sit
        amet, placerat vestibulum nisi. Donec iaculis lacinia fermentum. Sed id
        varius mi. Donec et lacus maximus, semper dolor eu, tincidunt felis.
        Nulla facilisi. Quisque euismod facilisis turpis, auctor placerat tellus
        dictum non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet
        bibendum diam. Sed egestas nisi laoreet, fringilla tellus nec,
        consectetur nunc. Maecenas orci dolor, vehicula vitae elementum
        pulvinar, molestie in ante. Vestibulum vitae velit fringilla, rutrum
        lacus vitae, dignissim nulla. Mauris luctus nunc in tincidunt vulputate.
        Phasellus quis sapien pharetra, eleifend enim feugiat, ullamcorper
        sapien. Ut dictum, lacus quis venenatis viverra, odio sapien aliquet
        nibh, a pellentesque augue arcu venenatis quam. Maecenas faucibus lectus
        eu ligula iaculis tristique. Cras ligula ligula, tincidunt sed neque sit
        amet, placerat vestibulum nisi. Donec iaculis lacinia fermentum. Sed id
        varius mi. Donec et lacus maximus, semper dolor eu, tincidunt felis.
        Nulla facilisi. Quisque euismod facilisis turpis, auctor placerat tellus
        dictum non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet
        bibendum diam. Sed egestas nisi laoreet, fringilla tellus nec,
        consectetur nunc. Maecenas orci dolor, vehicula vitae elementum
        pulvinar, molestie in ante. Vestibulum vitae velit fringilla, rutrum
        lacus vitae, dignissim nulla. Mauris luctus nunc in tincidunt vulputate.
        Phasellus quis sapien pharetra, eleifend enim feugiat, ullamcorper
        sapien. Ut dictum, lacus quis venenatis viverra, odio sapien aliquet
        nibh, a pellentesque augue arcu venenatis quam. Maecenas faucibus lectus
        eu ligula iaculis tristique. Cras ligula ligula, tincidunt sed neque sit
        amet, placerat vestibulum nisi. Donec iaculis lacinia fermentum. Sed id
        varius mi. Donec et lacus maximus, semper dolor eu, tincidunt felis.
        Nulla facilisi. Quisque euismod facilisis turpis, auctor placerat tellus
        dictum non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet
        bibendum diam. Sed egestas nisi laoreet, fringilla tellus nec,
        consectetur nunc. Maecenas orci dolor, vehicula vitae elementum
        pulvinar, molestie in ante. Vestibulum vitae velit fringilla, rutrum
        lacus vitae, dignissim nulla. Mauris luctus nunc in tincidunt vulputate.
        Phasellus quis sapien pharetra, eleifend enim feugiat, ullamcorper
        sapien. Ut dictum, lacus quis venenatis viverra, odio sapien aliquet
        nibh, a pellentesque augue arcu venenatis quam. Maecenas faucibus lectus
        eu ligula iaculis tristique. Cras ligula ligula, tincidunt sed neque sit
        amet, placerat vestibulum nisi. Donec iaculis lacinia fermentum. Sed id
        varius mi. Donec et lacus maximus, semper dolor eu, tincidunt felis.
        Nulla facilisi. Quisque euismod facilisis turpis, auctor placerat tellus
        dictum non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet
        bibendum diam. Sed egestas nisi laoreet, fringilla tellus nec,
        consectetur nunc. Maecenas orci dolor, vehicula vitae elementum
        pulvinar, molestie in ante. Vestibulum vitae velit fringilla, rutrum
        lacus vitae, dignissim nulla. Mauris luctus nunc in tincidunt vulputate.
        Phasellus quis sapien pharetra, eleifend enim feugiat, ullamcorper
        sapien. Ut dictum, lacus quis venenatis viverra, odio sapien aliquet
        nibh, a pellentesque augue arcu venenatis quam. Maecenas faucibus lectus
        eu ligula iaculis tristique. Cras ligula ligula, tincidunt sed neque sit
        amet, placerat vestibulum nisi. Donec iaculis lacinia fermentum. Sed id
        varius mi. Donec et lacus maximus, semper dolor eu, tincidunt felis.
        Nulla facilisi. Quisque euismod facilisis turpis, auctor placerat tellus
        dictum non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet
        bibendum diam. Sed egestas nisi laoreet, fringilla tellus nec,
        consectetur nunc. Maecenas orci dolor, vehicula vitae elementum
        pulvinar, molestie in ante. Vestibulum vitae velit fringilla, rutrum
        lacus vitae, dignissim nulla. Mauris luctus nunc in tincidunt vulputate.
        Phasellus quis sapien pharetra, eleifend enim feugiat, ullamcorper
        sapien. Ut dictum, lacus quis venenatis viverra, odio sapien aliquet
        nibh, a pellentesque augue arcu venenatis quam. Maecenas faucibus lectus
        eu ligula iaculis tristique. Cras ligula ligula, tincidunt sed neque sit
        amet, placerat vestibulum nisi. Donec iaculis lacinia fermentum. Sed id
        varius mi. Donec et lacus maximus, semper dolor eu, tincidunt felis.
        Nulla facilisi. Quisque euismod facilisis turpis, auctor placerat tellus
        dictum non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet
        bibendum diam. Sed egestas nisi laoreet, fringilla tellus nec,
        consectetur nunc. Maecenas orci dolor, vehicula vitae elementum
        pulvinar, molestie in ante. Vestibulum vitae velit fringilla, rutrum
        lacus vitae, dignissim nulla. Mauris luctus nunc in tincidunt vulputate.
        Phasellus quis sapien pharetra, eleifend enim feugiat, ullamcorper
        sapien. Ut dictum, lacus quis venenatis viverra, odio sapien aliquet
        nibh, a pellentesque augue arcu venenatis quam. Maecenas faucibus lectus
        eu ligula iaculis tristique. Cras ligula ligula, tincidunt sed neque sit
        amet, placerat vestibulum nisi. Donec iaculis lacinia fermentum. Sed id
        varius mi. Donec et lacus maximus, semper dolor eu, tincidunt felis.
        Nulla facilisi. Quisque euismod facilisis turpis, auctor placerat tellus
        dictum non.
      </p>
      <Button primary onClick={() => setShowModal(true)}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
