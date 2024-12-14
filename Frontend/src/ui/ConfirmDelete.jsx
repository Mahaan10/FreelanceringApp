function ConfirmDelete({ resourceName, onClose, disabled, onConfirm }) {
  return (
    <div>
      <h2 className="font-bold text-secondary-700 mb-4 text-base">
        آیا از حذف {resourceName} مطمئن هستید ؟
      </h2>
      <div className="flex justify-between items-center gap-x-16">
        <button
          className="btn btn--danger flex-1"
          onClick={onConfirm}
          disabled={disabled}
        >
          بله
        </button>
        <button
          className="btn btn--primary flex-1"
          onClick={onClose}
          disabled={disabled}
        >
          خیر
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
