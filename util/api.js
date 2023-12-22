uniRequest.interceptors.request.use(  
(request) => {  
request.data = JSON.parse(request.data)  
}  
)