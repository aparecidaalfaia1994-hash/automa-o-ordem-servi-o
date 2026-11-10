"""Functions used in preparing Guido's gorgeous lasagna.

Learn about Guido, the creator of the Python language:
https://en.wikipedia.org/wiki/Guido_van_Rossum

This is a module docstring, used to describe the functionality
of a module and its functions and/or classes.
"""

# 1. Definindo as constantes (o tempo de preparo de cada camada geralmente é 2)
EXPECTED_BAKE_TIME = 40
PREPARATION_TIME = 2


# 2. Completando a primeira função e removendo o 'pass'
def bake_time_remaining(elapsed_bake_time):
    """Calculate the bake time remaining.

    Parameters:
        elapsed_bake_time (int): The baking time already elapsed.

    Returns:
        int: The remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """
    return EXPECTED_BAKE_TIME - elapsed_bake_time


# 3. Criando a função preparation_time_in_minutes com docstring
def preparation_time_in_minutes(number_of_layers):
    """Calculate the preparation time.

    Parameters:
        number_of_layers (int): The number of layers added to the lasagna.

    Returns:
        int: The total preparation time (in minutes) for the given number of layers.
        
    Function that takes the number of layers as an argument and returns how 
    many minutes it will take to prepare them.
    """
    return number_of_layers * PREPARATION_TIME


# 4. Criando a função elapsed_time_in_minutes com docstring
def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Calculate the total elapsed time.

    Parameters:
        number_of_layers (int): The number of layers added to the lasagna.
        elapsed_bake_time (int): The baking time already elapsed.

    Returns:
        int: The total elapsed time (in minutes) spent preparing and baking.
        
    Function that takes the number of layers and the time already spent baking 
    and returns the total time elapsed preparing and baking the lasagna.
    """
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time