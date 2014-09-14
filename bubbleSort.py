def bubble_sort(a):
    pass_count = 0
    swap_count = 0
    while True:
        swap = 0
        for i in range(len(a)-1):
            if a[i] > a[i+1]:
                a[i], a[i+1] = a[i+1], a[i]
                swap+=1
        pass_count += 1
        
        if swap:
            swap_count += swap
        else:
            break
    return pass_count, swap_count, a


print bubble_sort([6, 5, 16, 15, 19, 7, 2, 10, 18, 13, 9, 20, 17, 8, 3, 12, 1, 14, 4, 11])