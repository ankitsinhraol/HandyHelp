export const postalPattern = /^[abceghj-nprstvxy][0-9][abceghj-nprstv-z][0-9][abceghj-nprstv-z][0-9]$/;
export const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const Status = {
    Pending: 'Pending',
    InProgress: 'InProgress',
    Completed: 'Completed',
    Published: 'Published',
    Approved:'Approved',
    Canceled:'Cancelled'
  };