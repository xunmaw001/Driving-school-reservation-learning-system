const base = {
    get() {
        return {
            url : "http://localhost:8080/jiaxiaoyuyuexuexixitong/",
            name: "jiaxiaoyuyuexuexixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jiaxiaoyuyuexuexixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "驾校预约学习系统"
        } 
    }
}
export default base
