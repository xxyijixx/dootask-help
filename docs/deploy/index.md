# 部署DooTask

:::tip **QQ交流群**

- QQ群号: `546574618`
:::
## 安装程序

- 必须安装：`Docker v20.10+` 和 `Docker Compose v2.0+`
- 支持环境：`Centos/Debian/Ubuntu/macOS/Windows`
- 硬件建议：2核4G以上
- 特别说明：Windows 用户请使用 `git bash` 或者 `cmder` 运行命令

### 部署项目（Pro版）

```bash
# 1、克隆项目到您的本地或服务器

# 通过github克隆项目
git clone -b pro --depth=1 https://github.com/kuaifan/dootask.git
# 或者你也可以使用gitee
git clone -b pro --depth=1 https://gitee.com/aipaw/dootask.git

# 2、进入目录
cd dootask

# 3、一键安装项目（自定义端口安装，如：./cmd install --port 80）
./cmd install
```

### 开发编译

- 请确保你已经安装了 `NodeJs 20+`

```bash
# 开发模式
./cmd dev
   
# 编译项目（这是网页端的，App/Pc/Mac客户端请查看 README_CLIENT.md）
./cmd prod  
```

### 重置密码

```bash
# 重置默认管理员密码
./cmd repassword
```