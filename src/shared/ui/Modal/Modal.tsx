import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal: React.FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentCick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown, isOpen]);

  return (
    <Portal>
      <div
        className={classNames(cls.Modal, mods, [className, theme])}
      >
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={classNames(cls.content)} onClick={onContentCick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
