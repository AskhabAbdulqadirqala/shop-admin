import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/Button';

interface BaseModalProps {
  open?: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  contentClassName?: string;
  closeButtonClassName?: string;
  showCloseButton?: boolean;
  preventCloseOnOverlayClick?: boolean;
  altTitle?: string;
}

export const BaseModal = ({
  open = true,
  onOpenChange,
  children,
  className,
  overlayClassName,
  contentClassName,
  closeButtonClassName,
  showCloseButton = true,
  preventCloseOnOverlayClick = false,
  altTitle,
}: BaseModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
            overlayClassName,
          )}
        />
        <Dialog.Content
          className={cn(
            'fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] p-10',
            'bg-white rounded-lg shadow-lg',
            'duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
            'focus:outline-none',
            className,
            contentClassName,
          )}
          onPointerDownOutside={(e) => {
            if (preventCloseOnOverlayClick) {
              e.preventDefault();
            }
          }}
          onEscapeKeyDown={(e) => {
            if (preventCloseOnOverlayClick) {
              e.preventDefault();
            }
          }}
        >
          <Dialog.DialogTitle className='sr-only'>
            {altTitle}
          </Dialog.DialogTitle>

          {children}

          {showCloseButton && (
            <Dialog.Close asChild>
              <Button
                variant='ghost'
                className={cn(
                  'absolute right-4 top-4 opacity-70 transition-opacity hover:opacity-100',
                  closeButtonClassName,
                )}
              >
                <Cross2Icon className='h-4 w-4' />
                <span className='sr-only'>Закрыть</span>
              </Button>
            </Dialog.Close>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
