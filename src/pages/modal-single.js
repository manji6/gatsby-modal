import React from "react"
import Modal from "react-modal";

// react-modalの初期設定
// root nodeのSelectorを設定
Modal.setAppElement("#___gatsby");
// react-modalのデザインを設定修正する場合の例
Modal.defaultStyles.overlay.backgroundColor = "black";

const ModalSingle = () => {

  //モーダルの表示状態と切り替える為にState(props)を準備
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // shouldCloseOnEscやshouldCloseOnOverlayCliceを使う場合に設定が必要
  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return(
    <div>
      <div className="container">
        ここにモーダルを表示します。
        <button className="button" onClick={() => setIsOpen(true)}>ボタン</button>
      </div>
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={() => handleCloseModal()}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div>モーダルの表示内容です。</div>
      </Modal>

    </div>
  )
}

export default ModalSingle