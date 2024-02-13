@file: OptIn(UnstableApi::class) package com.doublesymmetry.kotlinaudio.players

import android.content.Context
import androidx.annotation.OptIn
import androidx.media3.common.util.UnstableApi
import com.doublesymmetry.kotlinaudio.models.BufferConfig
import com.doublesymmetry.kotlinaudio.models.CacheConfig
import com.doublesymmetry.kotlinaudio.models.PlayerConfig

class AudioPlayer(context: Context, playerConfig: PlayerConfig = PlayerConfig(), bufferConfig: BufferConfig? = null, cacheConfig: CacheConfig? = null): BaseAudioPlayer(context, playerConfig, bufferConfig, cacheConfig)