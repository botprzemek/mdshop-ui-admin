import API from '@/api/API'

export const getInvoices = () => API.get('/invoices')
export const findInvoice = (id) => API.get(`/invoices/${id}`)
export const createInvoice = (data) => API.post('/invoices', data)
export const updateInvoice = (id, data) => API.put(`/invoices/${id}`, data)
export const deleteInvoice = (id) => API.delete(`/invoices/${id}`)
