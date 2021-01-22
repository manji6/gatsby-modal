import React from "react"
import Modal from "react-modal";

// react-modalの初期設定
// root nodeのSelectorを設定
Modal.setAppElement("#___gatsby");

const ModalMultiple = () => {

 // モーダルの表示状態と切り替える為にState(props)を準備
  // false = 非表示、数値 = 表示しているModalの番目とする
  const [modalIsOpen, setIsOpen] = React.useState(false);

  //どのモーダルを表示するのか操作するために関数を準備
  const handleOpenModal = (num) => {
    setIsOpen(num) 
  }

  // shouldCloseOnEscやshouldCloseOnOverlayCliceを使う場合に設定が必要
  // モーダルを非表示の状態にするため、falseを指定する
  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return(
    <div>
      <div className="container">
        複数パターン：ここにモーダルを表示します。
        <ul>
          <li><button className="button" onClick={() => handleOpenModal(0)}>モーダル1</button></li>
        </ul>
        <ul>
          <li><button className="button" onClick={() => handleOpenModal(1)}>モーダル2</button></li>
        </ul>
        <ul>
          <li><button className="button" onClick={() => handleOpenModal(2)}>モーダル3</button></li>
        </ul>
        <ul>
          <li><button className="button" onClick={() => handleOpenModal(3)}>モーダル4</button></li>
        </ul>
      </div>
      <Modal 
        isOpen={(modalIsOpen === 0)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div>モーダル1の表示内容です。</div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 1)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div>モーダル2の表示内容です。</div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 2)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div>モーダル3の表示内容です。</div>
      </Modal>
      <Modal 
        isOpen={(modalIsOpen === 3)}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div>モーダル4の表示内容です。</div>
      </Modal>

    </div>
  )
}

export default ModalMultiple