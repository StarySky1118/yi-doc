# 九、KMeans 聚类

## 1、算法介绍

K-means 是一种聚类算法，它将一组数据集合分成 k 个非重叠的子集（称为簇），每个子集代表一个簇，簇的个数 k 是由用户指定的。每个数据点都属于最接近它的簇，而簇的中心点则代表该簇的平均值。

K-means 算法的基本流程如下：

1. 从数据集中随机选择 k 个样本点作为初始质心。
2. 将每个样本点分配到距离其最近的质心所在的簇。
3. 重新计算每个簇的质心（即每个簇所有样本点的平均值）。
4. 重复步骤 2 和 3，直到质心不再改变或者达到最大迭代次数。

K-means 算法的优点是简单易实现，并且对于大数据集有较高的效率和可扩展性。但是，K-means 算法也存在一些缺点，比如对于初始质心的选择敏感，可能会得到局部最优解；而且 K 值需要人为指定，且不易确定最优的 K 值；此外，K-means 算法对于非凸数据集的聚类效果不佳。

## 2、源码分析

**数据集分析**

无标签数据集，两个特征，总计 80 条数据。

```python
1.658985	4.285136
-3.453687	3.424321
4.838138	-1.151539
-5.379713	-3.362104
0.972564	2.924086
-3.567919	1.531611
0.450614	-3.302219
-3.487105	-1.724432
```

**程序入口**

```python
if __name__ == "__main__":
    # 测试 kMeans 函数
    testKMeans()
```

```python
def testKMeans():
    # 加载测试数据集
    dataMat = mat(loadDataSet('./data/testSet.txt'))

    # 该算法会创建k个质心，然后将每个点分配到最近的质心，再重新计算质心。
    # 这个过程重复数次，知道数据点的簇分配结果不再改变位置。
    # 运行结果（多次运行结果可能会不一样，可以试试，原因为随机质心的影响，但总的结果是对的， 因为数据足够相似）
    myCentroids, clustAssing = kMeans(dataMat, 4)

    print('centroids=', myCentroids)
```

**聚类**

```python
# k-means 聚类算法
# 该算法会创建k个质心，然后将每个点分配到最近的质心，再重新计算质心。
# 这个过程重复数次，知道数据点的簇分配结果不再改变位置。
# 运行结果（多次运行结果可能会不一样，可以试试，原因为随机质心的影响，但总的结果是对的， 因为数据足够相似，也可能会陷入局部最小值）
def kMeans(dataMat, k, distMeas=distEclud, createCent=randCent):
    m = shape(dataMat)[0]  # 行数
    clusterAssment = mat(zeros(
        (m, 2)))  # 创建一个与 dataMat 行数一样，但是有两列的矩阵，用来保存簇分配结果
    centroids = createCent(dataMat, k)  # 创建质心，随机k个质心
    clusterChanged = True
    while clusterChanged:
        clusterChanged = False
        for i in range(m):  # 循环每一个数据点并分配到最近的质心中去
            minDist = inf
            minIndex = -1
            for j in range(k):
                distJI = distMeas(centroids[j, :],
                                  dataMat[i, :])  # 计算数据点到质心的距离
                if distJI < minDist:  # 如果距离比 minDist（最小距离）还小，更新 minDist（最小距离）和最小质心的 index（索引）
                    minDist = distJI
                    minIndex = j
            if clusterAssment[i, 0] != minIndex:  # 簇分配结果改变
                clusterChanged = True  # 簇改变
                clusterAssment[
                    i, :] = minIndex, minDist**2  # 更新簇分配结果为最小质心的 index（索引），minDist（最小距离）的平方
        print(centroids)
        for cent in range(k):  # 更新质心
            ptsInClust = dataMat[nonzero(
                clusterAssment[:, 0].A == cent)[0]]  # 获取该簇中的所有点
            centroids[cent, :] = mean(
                ptsInClust, axis=0)  # 将质心修改为簇中所有点的平均值，mean 就是求平均值的
    return centroids, clusterAssment
```

## 3、算法缺陷

1. 对初始值敏感：K-means聚类算法需要预先指定聚类中心，这些聚类中心的初始值对最终聚类结果有很大影响。如果初始值选择不当，可能会导致算法陷入局部最优解而得不到全局最优解。
2. 不适用于非凸数据集：K-means聚类算法基于距离度量进行聚类，因此只适用于凸数据集。对于非凸数据集，由于存在多个局部最优解，聚类结果可能不够准确。
3. 对噪声和异常值敏感：K-means聚类算法对噪声和异常值非常敏感。如果数据集中存在噪声和异常值，可能会导致聚类中心被错误地影响，从而影响聚类结果。
4. 需要事先确定聚类个数：K-means聚类算法需要指定聚类个数K，但在实际应用中，往往难以确定K的值。如果K的值选择不合理，可能会导致聚类结果不准确。
5. 只能用于数值型数据：K-means聚类算法只能用于数值型数据，对于非数值型数据（如文本、图像等），需要进行适当的转换才能使用K-means聚类算法进行聚类。

## 4、二分 KMeans 聚类

### (1) 算法步骤

该算法首先将所有点作为一个簇，然后将该簇一分为二。

之后选择其中一个簇继续进行划分，选择哪一个簇进行划分取决于对其划分时候可以最大程度降低 SSE（平方和误差）的值。

上述基于 SSE 的划分过程不断重复，直到得到用户指定的簇数目为止。

### (2) 源码分析

**数据集概述**

二特征无标签，共 60 条数据。

**程序入口**

```python
if __name__ == "__main__":
	# 测试二分 biKMeans 函数
    testBiKMeans()
```

```python
def testBiKMeans():
    # 加载测试数据集
    dataMat = mat(loadDataSet('./data/testSet2.txt'))

    centList, myNewAssments = biKMeans(dataMat, 3)

    print('centList=', centList)
```

**二分聚类**

```python
# 二分 KMeans 聚类算法, 基于 kMeans 基础之上的优化，以避免陷入局部最小值
def biKMeans(dataMat, k, distMeas=distEclud):
    m = shape(dataMat)[0]
    clusterAssment = mat(zeros((m, 2)))  # 保存每个数据点的簇分配结果和平方误差
    centroid0 = mean(dataMat, axis=0).tolist()[0]  # 质心初始化为所有数据点的均值
    centList = [centroid0]  # 初始化只有 1 个质心的 list
    for j in range(m):  # 计算所有数据点到初始质心的距离平方误差
        clusterAssment[j, 1] = distMeas(mat(centroid0), dataMat[j, :])**2
    while (len(centList) < k):  # 当质心数量小于 k 时
        lowestSSE = inf
        for i in range(len(centList)):  # 对每一个质心
            ptsInCurrCluster = dataMat[nonzero(
                clusterAssment[:, 0].A == i)[0], :]  # 获取当前簇 i 下的所有数据点
            centroidMat, splitClustAss = kMeans(
                ptsInCurrCluster, 2, distMeas)  # 将当前簇 i 进行二分 kMeans 处理
            sseSplit = sum(splitClustAss[:, 1])  # 将二分 kMeans 结果中的平方和的距离进行求和
            sseNotSplit = sum(
                clusterAssment[nonzero(clusterAssment[:, 0].A != i)[0],
                               1])  # 将未参与二分 kMeans 分配结果中的平方和的距离进行求和
            print("sseSplit, and notSplit: ", sseSplit, sseNotSplit)
            if (sseSplit + sseNotSplit) < lowestSSE:
                bestCentToSplit = i
                bestNewCents = centroidMat
                bestClustAss = splitClustAss.copy()
                lowestSSE = sseSplit + sseNotSplit
        # 找出最好的簇分配结果
        bestClustAss[nonzero(bestClustAss[:, 0].A == 1)[0], 0] = len(
            centList)  # 调用二分 kMeans 的结果，默认簇是 0,1. 当然也可以改成其它的数字
        bestClustAss[nonzero(bestClustAss[:, 0].A == 0)[0],
                     0] = bestCentToSplit  # 更新为最佳质心
        print('the bestCentToSplit is: ', bestCentToSplit)
        print('the len of bestClustAss is: ', len(bestClustAss))
        # 更新质心列表
        centList[bestCentToSplit] = bestNewCents[0, :].tolist()[
            0]  # 更新原质心 list 中的第 i 个质心为使用二分 kMeans 后 bestNewCents 的第一个质心
        centList.append(
            bestNewCents[1, :].tolist()[0])  # 添加 bestNewCents 的第二个质心
        clusterAssment[nonzero(clusterAssment[:, 0].A == bestCentToSplit)[
            0], :] = bestClustAss  # 重新分配最好簇下的数据（质心）以及SSE
    return mat(centList), clusterAssment
```

## 5、sklearn 聚类

### (1) 普通聚类

Scikit-learn的KMeans聚类算法中，可调整的参数主要包括以下几个：

1. **n_clusters**：指定聚类的簇数，即K值。
2. **init**：指定初始化聚类中心的方法，可以是'k-means++'、'random'或一个ndarray类型的自定义初始聚类中心。
3. **n_init**：指定在不同的随机初始聚类中心情况下，运行算法的次数，并返回最佳的一次结果。
4. **max_iter**：指定算法运行的最大迭代次数。
5. **tol**：指定收敛的容忍度，即当聚类中心移动的距离小于tol时，算法认为已经收敛，停止迭代。
6. **algorithm**：指定算法的实现方式，可以是'auto'、'full'或'elkan'。
7. **random_state**：指定随机种子，确保算法的可复现性。

以上是一些常见的KMeans聚类可调整的参数，不同的参数设置会对聚类结果产生不同的影响。在使用KMeans聚类算法时，需要根据具体数据集和聚类需求进行参数的选择和调整。

```python
from sklearn.cluster import KMeans
import numpy as np

# 创建一个随机数据集
X = np.random.random((20, 5))

# 创建KMeans模型并拟合数据
kmeans = KMeans(n_clusters=3, random_state=0).fit(X)

# 输出聚类中心点和每个数据点所属的簇
print(kmeans.cluster_centers_)
print(kmeans.labels_)
```

### (2) 二分聚类

```python
from sklearn.cluster import KMeans
import numpy as np

# 创建一个随机数据集
X = np.random.random((100, 5))

# 创建二分KMeans模型并拟合数据
kmeans = KMeans(n_clusters=3, random_state=0, algorithm='full')
kmeans.fit(X)

# 获取每个数据点所属的簇
labels = kmeans.labels_

# 二分KMeans聚类
from sklearn.cluster import Birch
brc = Birch(n_clusters=2)
brc.fit(X)

# 获取每个数据点所属的簇
brc_labels = brc.predict(X)

# 输出聚类结果
print("二分KMeans聚类结果:")
print(brc_labels)
```
