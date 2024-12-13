# 应用部署


## 系统要求

1. **必须安装**:
   - **Docker v20.10+**: 系统必须安装最新的 Docker 版本 20.10 或更高，以确保稳定性和安全性。
   - **Docker Compose v2.0+**: 必须安装 Docker Compose 2.0 或以上版本，以便正常运行容器化应用。

2. **支持环境**:
   - **操作系统**:
     - `CentOS`
     - `Debian`
     - `Ubuntu`
     - `macOS`
     - `Windows` (不需要额外特别说明)
   - **硬件要求**:
     - `CPU`: 双核处理器或更高
     - `RAM`: 建议不少于 4GB 内存
     - `硬盘`: 建议有充足的存储空间以容纳 Docker 镜像和容器数据

## 服务器部署



### 部署步骤

按照以下步骤部署项目，确保系统满足 [系统要求](#系统要求)。


#### 1. 克隆项目代码

您可以通过以下任一平台将项目克隆到本地或服务器：

- **GitHub**:
```bash
git clone -b pro --depth=1 https://github.com/kuaifan/dootask.git
```

- **Gitee**:
```bash
git clone -b pro --depth=1 https://gitee.com/aipaw/dootask.git
```



#### 2. 进入项目目录

切换到项目的根目录：
```bash
cd dootask
```


#### 3. 安装项目

使用一键安装命令部署项目：
```bash
./cmd install
```

**自定义端口安装**  
如果需要指定服务的运行端口，可以通过以下命令自定义端口号：
```bash
./cmd install --port 80
```


#### 注意事项

- 安装过程中可能会拉取相关依赖和镜像，请确保网络连接正常。
- 如果安装失败，请检查是否已正确安装 Docker 和 Docker Compose，并确认系统权限足够。


完成以上步骤后，项目将自动运行并在指定端口上提供服务。