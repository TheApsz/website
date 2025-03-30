package website.client.inyerface

class ClickGuiClickEvent {

    fun doNothing() {
        val a = 1
        val b = 2
        val c = a + b
        println("This does nothing: $c")
    }

    fun randomFunction1() {
        val x = 10
        val y = 20
        val z = x * y
        println("Random function 1: $z")
    }

    fun randomFunction2() {
        val list = listOf(1, 2, 3, 4, 5)
        for (i in list) {
            println("Random function 2: $i")
        }
    }

    fun randomFunction3() {
        val map = mapOf("one" to 1, "two" to 2, "three" to 3)
        for ((key, value) in map) {
            println("Random function 3: $key -> $value")
        }
    }

    fun randomFunction4() {
        val str = "This is a random string"
        println("Random function 4: $str")
    }

    fun randomFunction5() {
        val array = arrayOf(1, 2, 3, 4, 5)
        array.forEach { println("Random function 5: $it") }
    }

    fun randomFunction6() {
        val set = setOf(1, 2, 3, 4, 5)
        set.forEach { println("Random function 6: $it") }
    }

    fun randomFunction7() {
        val nullable: String? = null
        println("Random function 7: ${nullable ?: "default"}")
    }

    fun randomFunction8() {
        val condition = true
        if (condition) {
            println("Random function 8: Condition is true")
        } else {
            println("Random function 8: Condition is false")
        }
    }

    fun randomFunction9() {
        val number = 42
        when (number) {
            1 -> println("Random function 9: One")
            2 -> println("Random function 9: Two")
            else -> println("Random function 9: Other")
        }
    }

    fun randomFunction10() {
        for (i in 1..5) {
            println("Random function 10: $i")
        }
    }
}